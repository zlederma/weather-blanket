
const SingleBar = ({ day, key }) => {

  // const divColorChooser = () => {
  //   if (day.tempmax >= 55) {
  //     if (day.tempmax >= 99) {
  //       return "rgb(87,52,56)";
  //     }
  //     if (day.tempmax >= 88) {
  //       return "rgb(114, 42, 44)";
  //     }
  //     if (day.tempmax >= 77) {
  //       return "rgb(141, 76, 46)";
  //     }
  //     if (day.tempmax >= 66) {
  //       return "rgb(194, 156, 73)";
  //     }
  //     if (day.tempmax >= 55) {
  //       return "rgb(101, 115, 66)";
  //     }
  //   }

  //   if (day.tempmax >= 44) {
  //     return "rgb(83, 100, 90)";
  //   }

  //   if (day.tempmax >= 33) {
  //     return "rgb(54, 85, 87)";
  //   }

  //   if (day.tempmax >= 22) {
  //     return "rgb(43, 72, 106)";
  //   }

  //   if (day.tempmax >= 11) {
  //     return "rgb(79, 49, 85)";
  //   }

  //   if (day.tempmax < 11) {
  //     return "rgb(122, 109, 181)";
  //   }

  //   return "rgb(55, 155, 0)";
  // };

  const divColorChooser = () => {
    if (day.tempmax >= 55) {
      if (day.tempmax >= 99) {
        return "rgb(188, 57, 52)";
      }
      if (day.tempmax >= 88) {
        return "rgb(189, 89, 53)";
      }
      if (day.tempmax >= 77) {
        return "rgb(189, 119, 53)";
      }
      if (day.tempmax >= 66) {
        return "rgb(189, 157, 53)";
      }
      if (day.tempmax >= 55) {
        return "rgb(183, 189, 53)";
      }
    }

    if (day.tempmax >= 44) {
      return "rgb(88, 189, 53)";
    }

    if (day.tempmax >= 33) {
      return "rgb(53, 189, 121)";
    }

    if (day.tempmax >= 22) {
      return "rgb(53, 179, 189)";
    }

    if (day.tempmax >= 11) {
      return "rgb(53, 122, 189)";
    }

    if (day.tempmax < 11) {
      return "rgb(53, 56, 189)";
    }

    return "rgb(55, 155, 0)";
  };
  const dateFormatter = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let parts = d.split("-");

    //takes away the 0 that is at the beginning of the string in certain months
    if (parts[1].charAt(0) === 0) {
      parts[1] = parts[1].slice(1);
    }
    let month = months[parts[1] - 1];
    let date = parts[2];
    let year = parts[0];

    return `${month} ${date} ${year}`
  }


  return (

    //Makes it so it does not error when weather is undefined
    (typeof day.tempmax != "undefined" ? (
      <>
        <div
          className="bar"
          style={{
            backgroundColor: divColorChooser(),
          }}
        >
          {dateFormatter(day.datetime)}: {Math.round(day.tempmax)}&#176;F
        </div>
      </>
    ) :
      <div></div>)
  );
};

export default SingleBar;
