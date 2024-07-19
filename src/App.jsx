import { BrowserRouter, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./routes"
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {

  return (
    <div className="flex flex-col h-screen w-full">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(item => {
            const Page = item.component;

            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else if (item.layout === null) {
              Layout = Fragment;
            } 

            return <Route key={item.path} path={item.path} element={
              <Layout>
                <Page />
              </Layout>
              }
            />
          }
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
