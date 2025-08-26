// Debug component to check the axios configuration
import { axiosInstance } from '../lib/axios';

export const DebugAxios = () => {
    console.log('Axios base URL:', axiosInstance.defaults.baseURL);
    console.log('Vite mode:', import.meta.env.MODE);
    console.log('Vite API Base URL:', import.meta.env.VITE_API_BASE_URL);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, background: 'yellow', padding: '10px', zIndex: 9999 }}>
            <h3>Debug Info:</h3>
            <p>Base URL: {axiosInstance.defaults.baseURL}</p>
            <p>Mode: {import.meta.env.MODE}</p>
            <p>VITE_API_BASE_URL: {import.meta.env.VITE_API_BASE_URL}</p>
        </div>
    );
};
