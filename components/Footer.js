export default function Footer() {
    return(
        <div className="bg-[#242324] min-h-[200px] py-10 px-6 lg:py-14 lg:px-20 flex flex-wrap flex-col justify-between lg:items-center lg:flex-row">
            <div className="max-w-[450px] mr-8">
                <a href="#"><h1 className="logo font-bold text-3xl overflow-hidden text-[#ec8700] cursor-pointer">FITGROW</h1></a>
                <p className="text-[#F4F8EB] text-sm my-6">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
                <p className="text-[#F4F8EB] text-xl font-bold">© FITGROW All Rights Reserved.</p>
            </div>
            <div className="my-16">
                <h1 className="text-3xl font-bold text-[#F4F8EB] pb-8">Links</h1>
                <a href="#products"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Products</li></a>
                <a href="#merchandise"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] my-2 hover:duration-700">Merchandise</li></a>
                <a href="#tech"><li className="text-xl text-[#ec8700] font-medium cursor-pointer hover:text-[#F4F8EB] hover:duration-700">Technology</li></a>
            </div>
            <div className="flex flex-col text-[#F4F8EB]">
                <h1 className="text-3xl font-bold pb-14">Contact Us</h1>
                <h2 className="mb-4">Tempus metus mattis risus volutpat egestas.</h2>
                <h2>(333)-425-6825</h2>
            </div>
        </div>
    )
}