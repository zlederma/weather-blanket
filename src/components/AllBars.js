import SingleBar from './SingleBar';

const AllBars = ({ weather }) => {

    const firstOfMonth = (d) => {
        let parts = d.split("-");

        //takes away the 0 that is at the beginning of the string in certain months

        let date = parts[2];

        if (date === '01') {
            return true;
        }

        return false;
        ;
    }

    const getMonth = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let parts = d.split("-");

        //takes away the 0 that is at the beginning of the string in certain months
        if (parts[1].charAt(0) === 0) {
            parts[1] = parts[1].slice(1);
        }
        let month = months[parts[1] - 1];
        let year = parts[0];

        return `${month} ${year}`;
    }



    return (
        // weather.days.slice().reverse().map((day, key) => {
        weather.days.map((day, key) => {
            if (firstOfMonth(day.datetime) || key === 0) {
                return (
                    <>
                        <h1 className="Month"> {getMonth(day.datetime)} </h1>
                        < SingleBar
                            day={day}
                            key={key} />
                    </>
                )
            }
            return (
                < SingleBar
                    day={day}
                    key={key} />
            );
        })
    )
}

export default AllBars;