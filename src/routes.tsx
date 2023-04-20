import { createHashRouter } from "react-router-dom";
import { LoginView } from "./components/Login";
import { RootView } from "./Veiws";

export default createHashRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: (
          <>
            <ul className="w-48 border-r border-r-gray-200 pr-2 text-md">
              <li className="p-2"><a href="#">Action 1</a></li>
              <li className="border-t border-t-gray-200 p-2"><a href="#">Action 2</a></li>
              <li className="border-t border-t-gray-200 p-2"><a href="#">Action 3</a></li>
              <li className="border-t border-t-gray-200 p-2"><a href="#">Action 4</a></li>
            </ul>
            <div className="flex-grow pl-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea
              quo, consequatur id illo, quidem adipisci, odio dolores soluta ab
              doloribus velit incidunt corrupti nobis aliquid. Aspernatur, error
              hic? Eius?
            </div>
          </>
        ),
      },
    ],
  },
]);
