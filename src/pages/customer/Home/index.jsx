import Banner from "../../../components/customer/Banner";
import MoviesCarousel from "../../../components/customer/MoviesCarousel";

export default function Home() {
    return (
        <>
            {/* Banners */}
            <Banner />

            {/* Movies showing */}
            <MoviesCarousel />

            {/* Hot Movies */}

            <section className="bg-gray-900 mx-auto py-10 px-4 md:px-28">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    Phim Hot
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
                    {/* Movie Card */}
                    <div className="relative bg-gray-800 p-1 md:p-2 rounded-lg h-fit md:h-[36rem]">
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md shadow-lg">
                            HOT
                        </div>
                        <img
                            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                            alt="Movie Title"
                            className="md:h-3/4 w-full object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-2 p-2">
                            <h3 className="mt-1 md:mt-4 text-white text-lg font-bold truncate max-w-full">
                                Cám
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Ngày chiếu: 26-11-2024
                            </p>
                            <div className="flex items-center justify-around">
                                <button className="mt-2 bg-red-600 py-2 px-4 text-white rounded-lg">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Movie Card */}
                    <div className="relative bg-gray-800 p-1 md:p-2 rounded-lg h-fit md:h-[36rem]">
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md shadow-lg">
                            HOT
                        </div>
                        <img
                            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                            alt="Movie Title"
                            className="md:h-3/4 w-full object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-2 p-2">
                            <h3 className="mt-1 md:mt-4 text-white text-lg font-bold truncate max-w-full">
                                Cám
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Ngày chiếu: 26-11-2024
                            </p>
                            <div className="flex items-center justify-around">
                                <button className="mt-2 bg-red-600 py-2 px-4 text-white rounded-lg">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Movie Card */}
                    <div className="relative bg-gray-800 p-1 md:p-2 rounded-lg h-fit md:h-[36rem]">
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md shadow-lg">
                            HOT
                        </div>
                        <img
                            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                            alt="Movie Title"
                            className="md:h-3/4 w-full object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-2 p-2">
                            <h3 className="mt-1 md:mt-4 text-white text-lg font-bold truncate max-w-full">
                                Cám
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Ngày chiếu: 26-11-2024
                            </p>
                            <div className="flex items-center justify-around">
                                <button className="mt-2 bg-red-600 py-2 px-4 text-white rounded-lg">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Movie Card */}
                    <div className="relative bg-gray-800 p-1 md:p-2 rounded-lg h-fit md:h-[36rem]">
                        <div className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md shadow-lg">
                            HOT
                        </div>
                        <img
                            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                            alt="Movie Title"
                            className="md:h-3/4 w-full object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-2 p-2">
                            <h3 className="mt-1 md:mt-4 text-white text-lg font-bold truncate max-w-full">
                                Cám
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                Ngày chiếu: 26-11-2024
                            </p>
                            <div className="flex items-center justify-around">
                                <button className="mt-2 bg-red-600 py-2 px-4 text-white rounded-lg">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
