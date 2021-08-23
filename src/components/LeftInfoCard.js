
const LeftInfoCard = ({ weather }) => {

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
        for (let i = 0; i < weather.days.length; i++) {
            if (weather.days[i].tempmin < min) {
                min = weather.days[i].tempmin
            }
        }
        return Math.round(min);
    }


    const avgTemp = () => {
        let sum = 0;
        for (let i = 0; i < weather.days.length; i++) {
            sum += weather.days[i].temp;
        }
        return Math.round(sum / weather.days.length);
    }



    return (
        <div className="InfoContainer">
            <div className="Location">
                {weather.resolvedAddress}
            </div>
            <div className="tempStats">
                <h1> Average Temperature </h1>
                <h2> {dateFormatter(weather.days[0].datetime)} through {dateFormatter(weather.days[weather.days.length - 1].datetime)}</h2>
                <p> {avgTemp()}</p>
                <h1> Highest Temperature </h1>
                <h2> {dateFormatter(weather.days[highestTemp()].datetime)} </h2>
                <p> {Math.round(weather.days[highestTemp()].tempmax)}</p>
                <h1> Lowest Temperature </h1>
                <h2> date range </h2>
                <p> {lowestTemp()}</p>
            </div>
        </div>
    )
}


export default LeftInfoCard;