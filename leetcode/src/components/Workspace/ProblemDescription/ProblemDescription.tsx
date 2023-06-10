import React, { useState, useEffect } from "react";
import RectangleSkeleton from "@/components/Skeleton/RectangleSkeleton";
import CircleSkeleton from "@/components/Skeleton/CircleSkeleton";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem, Problem } from "@/utils/types/problem";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  runTransaction,
  updateDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLoading3Quarters,
  AiFillStar,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { toast } from "react-toastify";

type ProblemDescriptionProps = {
  problem: Problem;
  _solved: boolean;
};

const ProblemDescription = () => {
  const [user] = useAuthState(auth);
  const { currentProblem, loading, ProblemDifficult, setCurrentProblem } = useGetCurrentProblem(problem.id);

    const returnUserDataAndProblemData = async (transaction: any) => {
      const userRef = doc(firestore, "users", user!.uid);
      const problemRef = doc(firestore, "problems", problem.id);
      const userDoc = await transaction.get(userRef);
      const problemDoc = await transaction.get(problemRef);
      return { userDoc, problemDoc, userRef, problemRef };
    };

  return <div>ProblemDescription</div>;
};

export default ProblemDescription;

function useGetCurrentProblem(problemId: string) {
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [problemDifficultyClass, setProblemDifficultyClass] =
    useState<string>("");

  useEffect(() => {
    // Get problem from DB
    const getCurrentProblem = async () => {
      setLoading(true);
      try {
        const docRef = doc(firestore, "problems", problemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const problem = docSnap.data();
          setCurrentProblem({ id: docSnap.id, ...problem } as DBProblem);
          // easy, medium, hard
          setProblemDifficultyClass(
            problem.difficulty === "Easy"
              ? "bg-olive text-olive"
              : problem.difficulty === "Medium"
              ? "bg-dark-yellow text-dark-yellow"
              : " bg-dark-pink text-dark-pink"
          );
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getCurrentProblem();
  }, [problemId]);

  return { currentProblem, loading, problemDifficultyClass, setCurrentProblem };
}

function  useGetUsersDataOnProblem(problemId: string)  {
  const [data, setData] = useState({
    liked: false,
    disliked: false,
    starred: false,
    solved: false,
  });

  const [user] = useAuthState(auth);

  useEffect(() => {
    const getUsersDataOnProblem = async () => {
      const userRef = doc(firestore, "users", user!.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        const {
          solvedProblems,
          likedProblems,
          dislikedProblems,
          starredProblems,
        } = data;
        setData({
          liked: likedProblems.includes(problemId), // likedProblems["two-sum","jump-game"]
          disliked: dislikedProblems.includes(problemId),
          starred: starredProblems.includes(problemId),
          solved: solvedProblems.includes(problemId),
        });
      }
    }

    if (user) getUsersDataOnProblem();
    return () =>
      setData({ liked: false, disliked: false, starred: false, solved: false });
  }, [problemId, user])

  return {...data, setData}
}
