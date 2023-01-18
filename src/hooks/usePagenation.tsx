import { useEffect, useState } from 'react';
import { callApi } from '../api/api';
import { getAllList, getList } from '../redux/commentSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function usePagenation() {
  const [maxPage, setMaxPage] = useState(0);
  const [focusNum, setFocusNum] = useState(1);
  
  const Maxlength = useAppSelector(state => state.comment.maxNum);
  const dispatch = useAppDispatch();
  
  const handleClick = (page: number, e?: any) => {
    if (e) setFocusNum(e.target.textContent);
    else if (e === undefined) setFocusNum(1);
    dispatch(getList(page));
  }

  useEffect(() => {
    callApi.getList().then((res) => setMaxPage(Math.ceil(res.data.length / 4)));
    // dispatch(getAllList());
    dispatch(getList(focusNum));
    // setMaxPage(Maxlength / 4);
    console.log(Maxlength);
    console.log("calling maxpage")
  }, [focusNum]);

  return { focusNum, maxPage, handleClick }
}