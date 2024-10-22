import { usePortfolioStore } from "../../usePortfolioStore";

const Home = () => {

    const { bears } = usePortfolioStore();

    return (
        <div className="bg-blue-900 text-white">
            <div className="text-white font-bold text-xl">Homepage</div>
            {bears}
        </div>
    );
}

export default Home;