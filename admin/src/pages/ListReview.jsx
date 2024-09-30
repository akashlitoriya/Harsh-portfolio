import React, { useEffect, useState } from "react";
import { getReviews } from "../services/review";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "../components/core/listReviews/ReviewCard";
import Modal from "../components/common/Modal";
import { CgDanger } from "react-icons/cg";
import { deleteReview } from "../services/review";
import Loader from '../components/core/Loader'

const ListReview = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.user)
  const {loading} = useSelector((state) => state.loader);
  const [reviews, setReview] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewId, setReviewId] = useState(null);

  useEffect(() => {
    fetchReview();
  }, []);

  async function fetchReview() {
    const data = await dispatch(getReviews());
    setReview(data);
  }
  const handleDeleteReview = () => {
    console.log(reviewId);
    dispatch(deleteReview(reviewId, token));
    setShowDeleteModal(false);
    setReviewId(null);
  };
  const openDeleteModal = (reviewId) => {
    setShowDeleteModal(true);
    setReviewId(reviewId);
  };
  if(loading){
    return <Loader />
  }
  return (
    <div className="max-h-screen h-screen w-screen bg-backdrop flex justify-center items-center">
      <div className="max-w-[1200px] w-full max-h-[80vh] px-10 py-8 rounded-xl bg-cream_primary">
        <h1 className="text-2xl font-semibold text-center">Reviews</h1>
        <table className="w-full table-fixed">
          <colgroup>
            <col style={{ width: "10%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr className="border-b border-gray-500">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Brand</th>
              <th className="px-5 py-3">Instagram</th>
              <th className="px-5 py-3">Review</th>
              <th className="px-5 py-3">Option</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {reviews.length > 0 &&
              reviews.map((review) => (
                <ReviewCard
                  review={review}
                  key={review?.reviewId}
                  openDeleteModal={openDeleteModal}
                />
              ))}
          </tbody>
        </table>
      </div>
      {showDeleteModal && (
        <Modal
          title={"Are you sure?"}
          description={
            "This action cannot be undone. All values associated with this field will be lost."
          }
          label1={"Cancel"}
          label2={"Delete"}
          onCancel={() => {
            setReviewId("");
            setShowDeleteModal(false);
          }}
          onSubmit={() => handleDeleteReview()}
        >
          <CgDanger className="text-red-600"/>
        </Modal>
      )}
    </div>
  );
};

export default ListReview;
