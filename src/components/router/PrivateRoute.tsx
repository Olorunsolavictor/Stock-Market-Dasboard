import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../configuration/AuthContext';
import { ReactComponent as LoadingIcon } from "../../assets/loadingIcon.svg";


interface RouteProps {
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
    const { storedToken, fetchUserData } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
      setToken(storedToken)
   
    }, [storedToken])
    

    useEffect(() => {
        const fetchData = async () => {
            if (storedToken) {
                try {
                    await fetchUserData(storedToken);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setIsLoading(false); 
                }
            } else {
                setIsLoading(false); 
            }
        };

        fetchData();
    }, [storedToken, fetchUserData]);

    if (isLoading) {
        return  <div className="flex justify-center mt-[350px] z-50">
        <LoadingIcon className="suspense-loading-icon" />
      </div>;
    }

    if ( !storedToken) {
        return <Navigate to="/login" replace />; 
    }

    return <>{children}</>;
};

export default PrivateRoute;
