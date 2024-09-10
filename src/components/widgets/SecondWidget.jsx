import React, { useState } from "react";

function SecondWidget() { 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] =  useState([
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
  ])

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // setImage(reader.result);
            setData([...data,reader.result])
        };
        reader.readAsDataURL(file);
    }
};

  const previousImageHandler = () => {
    if(currentIndex === 0 ){
      return
    } else {
      setCurrentIndex(prev => prev-1)
    }

  }

  const nextImageHandler = () => {
    if(currentIndex === data.length -1 ){
      return
    } else {
      setCurrentIndex(prev => prev +1)
    }
  }
  return (
    <div
      className="secondWidget w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] mt-5 p-[15px] flex"
      style={{ boxShadow: "rgba(0,0,0,0.55) 1.95px 1.95px 2.6px " }}
    >
      <div className="flex flex-col gap-[105px]">
        <img src="/Vector.png" alt="vector" width="24px" height="24px" />
        <img src="/frame.png" alt="frame" />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-20">
          {" "}
          <div className="tab w-[149px] h-[62px] bg-[#171717] rounded-[20px] flex flex-col gap-7 ml-5">
            <p className="btn-text text-[#FFFFFF] text-[20px] font-[500] text-center pt-[15px] cursor-pointer">
              Gallery
            </p>
          </div>
          <div className="flex gap-8 ml-[150px] mt-2">
            <label
              for="input-img"
              className="addButton w-[110px] h-[40px] 2xl:w-[131px] 2xl:h-[46px] rounded-[20px] bg-[#ffffff08] shadow-addBtn text-[#FFFFFF] font-poppins font-medium  text-xs  2xl:text-[14px] flex justify-center gap-1 items-center cursor-pointer"
            >
              <img
                className="w-[12px] h-[12px]  "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgBzZBRCUAhDEU3ExjhRXgRrGQDG1nFCDaZEyaIqKAIeuCyweV8bAAnISLP+VeljOt1CjbYkrAs+QYeuuoMJ0oKFhGDEkE3wohv2r7xiJkUJBdJWK4htnX+lrIAAAAASUVORK5CYII="
                alt=""
              />
              <span>ADD IMAGE</span>
              <input
                className="hidden"
                accept="image/jpeg , image/png , /image/jpg "
                type="file"
                id="input-img"
                onChange={handleImageUpload}
              />
            </label>
            <div className="flex gap-3">
              <button
                onClick={previousImageHandler}
                className=" w-[38px] h-[38px] 2xl:w-[45px] 2xl:h-[45px] bg-rightBtn shadow-rightBtn rounded-full flex justify-center items-center"
              >
                <img
                  className="w-[14.19px] h-[14px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgBpdPBDYIwFAbg96Ax8cYIjKAbyASOICP0SLhxMBJPPTiAbsAGxAlcgRE0JEYiUFtREgIUKH9CQsrrR6F9CIpQ31/xwtxhlgaMsXtfHVEDRgzIrXyxvIqhqK/WUANgIfDL6XjoBWRwCGDh3oWB4FyggegCNTIH+CLU82zOyU0Cv6HzhPli2jsgJRCKNSDDXZiQkpMHMSBnHMytMO1KhkA8SsYimD2j6p/ITwIzriBMxBIdFobjof/NHKh5TjSh9onVgLBrsAW90rWqizsbUL4ZoXDEdifiskUXb0A3ckXU892hug8n0YHwwpEMJgAAAABJRU5ErkJggg=="
                  alt="img"
                />
              </button>
              <button
                onClick={nextImageHandler}
                className=" w-[38px] h-[38px] 2xl:w-[45px] 2xl:h-[45px] bg-rightBtn shadow-rightBtn rounded-full flex justify-center items-center"
              >
                <img
                  className="w-[14.19px] h-[14px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgBldMxDoIwFAbg/1XcOQLewFESTeQGjG5yhC4aoibGxZC4cASv4eSAMWxyBEZHd4FajDgYKe2/8vdL4T0IivAwdAT6W8JzF0dR3tZjUIZNAREIsm58sRq2tXoqIr0kmTueDAAaoUcz1x2f0mty/+0RNMLD9VGA5rL9oKLy4sM+M0a6IG1EBRkhbRA1YzSShPAlYjeQVcHiJMdoYnzvL2BXjAUWQxHLfch0z1eAQ2Cfm4ucURkbftj3q5/lYacGCKVXb7LBiP8D9TPNZWsHtJAuoBPRAero/MWOCtAKX258zrmt6rwA3pOKmPw92k0AAAAASUVORK5CYII="
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div>
         
          <div className="flex gap-5 w-[652px] h-[300px] pr-8 pt-8 pb-8 pl-5">
            <div
              className="w-[190px] h-[179px] rounded-[24px] min-h-[120px]"
              style={{
                backgroundImage: `url(${data[currentIndex]})`,
                backgroundSize: "cover",
              }}
            ></div>
            {!!data[currentIndex + 1] && (
              <div
                className="w-[190px] h-[179px] rounded-[24px] min-h-[120px]"
                style={{
                  backgroundImage: `url(${data[currentIndex + 1]})`,
                  backgroundSize: "cover",
                }}
              ></div>
            )}
            {!!data[currentIndex + 2] && (
              <div
                className="w-[190px] h-[179px] rounded-[24px] min-h-[120px]"
                style={{
                  backgroundImage: `url(${data[currentIndex + 2]})`,
                  backgroundSize: "cover",
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondWidget;