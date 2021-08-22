import SingleBar from './SingleBar';

const AllBars = ({ weather }) => {
    return (
        weather.days.forEach((entry) => {
            return (
                <SingleBar
                    temperature={entry.temp}
                    weather={weather}
                ></SingleBar>
            )
        }
        )
    )
}

export default AllBars;