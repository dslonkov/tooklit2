import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { setImgArr } from "./app/avatarSlice";

function App() {

  const images = useSelector(state => state.images)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    const selected = e.target.files;
    const selectedArr = Array.from(selected);
    const imagesArr = selectedArr.map((file) => {
      return URL.createObjectURL(file)
    })

    dispatch(setImgArr(imagesArr))
  }

  return (
    <div className="App">
      <label htmlFor="images">
        <input type="file" name='images' onChange={onChangeHandler} multiple/>
      </label>

      <div className="images" style={{display: 'flex', justifyContent: 'start', flexDirection: 'row-reverse', width: '1200px', flexWrap: 'wrap'}}>
        {
          images && images.map(item => (
              <div key={item}>
                <img src={item} alt="img" style={{padding: '20px', width: 200, height: 200}}/>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default App;
