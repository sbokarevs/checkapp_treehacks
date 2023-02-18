import Layout from '../components/layout';

const Profile = () => {
  return (
    <Layout>
      <div className={'mt-10'}>
        <div className="bg-white relative shadow rounded-lg w-6/6 md:w-6/6  lg:w-4/6 xl:w-3/6 mx-auto">
          <div >
            <h1 className="font-bold text-center text-3xl text-gray-900">User profile</h1>
            {/*<p className="text-center text-sm text-gray-400 font-medium">UI Components Factory</p>*/}
            <p>
                        <span>

                        </span>
            </p>
            <div className="my-5 px-6">
              <a href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-blue-500 hover:bg-blue-800"><span className="font-bold">Share profile</span></a>
            </div>
            <div className="flex justify-between items-center my-5 px-6">
              <a href=""
                 className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
              <a href=""
                 className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
              <a href=""
                 className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
              <a href=""
                 className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
            </div>

            <div className="w-full">
              <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <a href="#"
                   className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 space-x-1">
                  <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                       className="rounded-full h-6 shadow-md inline-block mr-2"/>
                  Visited group meditation
                  <span className="text-gray-500 text-xs">24 min ago</span>
                </a>

                <a href="#"
                   className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 space-x-1">
                  <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                       className="rounded-full h-6 shadow-md inline-block mr-2"/>
                  Passed 1 test
                  <span className="text-gray-500 text-xs">42 min ago</span>
                </a>

                <a href="#"
                   className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 space-x-1">
                  <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                       className="rounded-full h-6 shadow-md inline-block mr-2"/>
                  Posted new article in <span className="font-bold">#Mental Health</span>
                  <span className="text-gray-500 text-xs">49 min ago</span>
                </a>

                <a href="#"
                   className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 space-x-1">
                  <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                       className="rounded-full h-6 shadow-md inline-block mr-2"/>
                  Found 7 new friends
                  <span className="text-gray-500 text-xs">1 day ago</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
);
};

export default Profile;