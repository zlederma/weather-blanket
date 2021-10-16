
const LeftInfoCard = ({ weather }) => {

    const colorChooser = (temp) => {
        if (temp >= 55) {
            if (temp >= 99) {
                return "rgb(188, 57, 52)";
            }
            if (temp >= 88) {
                return "rgb(189, 89, 53)";
            }
            if (temp >= 77) {
                return "rgb(189, 119, 53)";
            }
            if (temp >= 66) {
                return "rgb(189, 157, 53)";
            }
            if (temp >= 55) {
                return "rgb(183, 189, 53)";
            }
        }

        if (temp >= 44) {
            return "rgb(88, 189, 53)";
        }

        if (temp >= 33) {
            return "rgb(53, 189, 121)";
        }

        if (temp >= 22) {
            return "rgb(53, 179, 189)";
        }

        if (temp >= 11) {
            return "rgb(53, 122, 189)";
        }

        if (temp < 11) {
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

    const locationFormatter = (loc) => {
        let parts = loc.split(',');
        return (
            `${parts[0]}, ${parts[1]}`
        )
    }


    return (
        <div className="info_container"
        // style={{ border: `10px solid ${colorChooser(avgTemp())}`, }}
        // style={{ 'border: 2px solid colorChooser(avgTemp())', }}
        >
            <div className="location">
                {locationFormatter(weather.resolvedAddress)}
            </div>
            <div className="temp_stats">
                <p style={{ color: colorChooser(avgTemp()), }}> {avgTemp()}&#176;F</p>
                <h1> Average Temperature </h1>
                <h2> {dateFormatter(weather.days[0].datetime)} through {dateFormatter(weather.days[weather.days.length - 1].datetime)}</h2>

                <p style={{ color: colorChooser(weather.days[highestTemp()].tempmax), }}>
                    {Math.round(weather.days[highestTemp()].tempmax)}&#176;F</p>
                <h1> Highest Temperature </h1>
                <h2> {dateFormatter(weather.days[highestTemp()].datetime)} </h2>

                <p style={{ color: colorChooser(weather.days[lowestTemp()].tempmin), }}> {Math.round(weather.days[lowestTemp()].tempmin)}&#176;F</p>
                <h1> Lowest Temperature </h1>
                <h2> {dateFormatter(weather.days[lowestTemp()].datetime)} </h2>
            </div>
        </div>
    )
}


export default LeftInfoCard;