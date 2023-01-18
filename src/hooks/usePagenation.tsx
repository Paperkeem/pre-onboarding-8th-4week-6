import { useEffect, useState } from "react";
import { callApi } from "../api/api";
import { getList } from "../redux/commentSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function usePagenation() {
  const [maxPage, setMaxPage] = useState(0);
  const [focusNum, setFocusNum] = useState(1);

  const comment = useAppSelector((state) => state.comment);
  const dispatch = useAppDispatch();

  const handlePagination = (
    page: number,
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e) setFocusNum(Number(e.currentTarget?.textContent));
    else setFocusNum(1);
    dispatch(getList(page));
  };

  useEffect(() => {
    callApi.getList().then((res) => setMaxPage(Math.ceil(res.data.length / 4)));
  }, [comment]);

  return { focusNum, maxPage, handlePagination };
}
