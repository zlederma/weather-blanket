
const LeftInfoCard = ({ weather }) => {

    const colorChooser = (temp) => {
        if (temp >= 55) {
            if (temp >= 99) {
                return "rgb(87,52,56)";
            }
            if (temp >= 88) {
                return "rgb(114, 42, 44)";
            }
            if (temp >= 77) {
                return "rgb(141, 76, 46)";
            }
            if (temp >= 66) {
                return "rgb(194, 156, 73)";
            }
            if (temp >= 55) {
                return "rgb(101, 115, 66)";
            }
        }

        if (temp >= 44) {
            return "rgb(83, 100, 90)";
        }

        if (temp >= 33) {
            return "rgb(54, 85, 87)";
        }

        if (temp >= 22) {
            return "rgb(43, 72, 106)";
        }

        if (temp >= 11) {
            return "rgb(79, 49, 85)";
        }

        if (temp < 11) {
            return "rgb(122, 109, 181)";
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

    const highestTemp = () => {
        let max = 0;
        let index = 0;
        for (let i = 0; i < weather.days.length; i++) {
            if (weather.days[i].tempmax > max) {
                max = weather.days[i].tempmax
                index = i;
            }
        }
        return index;
    }

    const lowestTemp = () => {
        let min = 150;
        let index = 0;
        for (let i = 0; i < weather.days.length; i++) {
            if (weather.days[i].tempmin < min) {
                min = weather.days[i].tempmin
                index = i;
            }
        }
        return index;
    }


    const avgTemp = () => {
        let sum = 0;
        for (let i = 0; i < weather.days.length; i++) {
            sum += weather.days[i].temp;
        }
        return Math.round(sum / weather.days.length);
    }



    return (
        <div className="info_container"
            style={{ border: `10px solid ${colorChooser(avgTemp())}`, }}
        // style={{ 'border: 2px solid colorChooser(avgTemp())', }}
        >
            <div className="location">
                {weather.resolvedAddress}
            </div>
            <div className="temp_stats">
                <h1> Average Temperature </h1>
                <h2> {dateFormatter(weather.days[0].datetime)} through {dateFormatter(weather.days[weather.days.length - 1].datetime)}</h2>
                <p> {avgTemp()}</p>

                <h1> Highest Temperature </h1>
                <h2> {dateFormatter(weather.days[highestTemp()].datetime)} </h2>
                <p style={{ color: colorChooser(weather.days[highestTemp()].tempmax), }}>
                    {Math.round(weather.days[highestTemp()].tempmax)}</p>

                <h1> Lowest Temperature </h1>
                <h2> {dateFormatter(weather.days[lowestTemp()].datetime)} </h2>
                <p> {Math.round(weather.days[lowestTemp()].tempmin)}</p>
            </div>
        </div>
    )
}


export default LeftInfoCard;