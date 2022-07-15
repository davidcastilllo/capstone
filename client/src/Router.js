import { Login } from "./components/Login"
import { Routes, Route, Navigate} from "react-router-dom";
import { isLoggedin } from "./states/GlobalState";
import { Data } from "./components/Data";

const ProtectedRoute = ({ children }) => {
 return isLoggedin.get() ? children : <Navigate to="/" />;
}

export let Router = () => {
 return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route
       path="/Data"
       element={
       <ProtectedRoute>
       <Data />
       </ProtectedRoute>
      }
      />
    </Routes>
 )
}