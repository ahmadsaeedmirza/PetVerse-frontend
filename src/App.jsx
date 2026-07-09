import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import UserSignupPage from './pages/UserSignupPage';
import OTPverificationPage from './pages/OTPverificationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import MyAccountPage from './pages/MyAccountPage';
import DrSignupPage from './pages/DrSignupPage';
import DrCompleteProfilePage from './pages/DrCompleteProfilePage';
import DrLoginPage from './pages/DrLoginPage';
import PetPage from './pages/PetPage';
import AddPetsPage from './pages/AddPetsPage';
import DrProfilePage from './pages/DrProfilePage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import BookAppointmentDetailPage from './pages/BookAppointmentDetailPage';
import NotificationPage from './pages/NotificationPage';
import AppointmentPage from './pages/AppointmentPage';
import DrHomePage from './pages/DrHomePage';
import DrAppointmentPage from './pages/DrAppointmentPage';
import AppointmentDetailPage from './pages/AppointmentDetailPage';
import DrReviewPage from './pages/DrReviewPage';
import DrScheduling from './pages/DrScheduling';
import UserUploadPage from './pages/UserUploadPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<UserSignupPage />} />
        <Route path="/otp-verification" element={<OTPverificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/signup" element={<CompleteProfilePage />} />
        <Route path="/resetPassword/:type/:token" element={<ResetPasswordPage />} />
        <Route path="/my-account" element={<MyAccountPage />} />
        <Route path="/vet" element={<DrSignupPage />} />
        <Route path="/signup/vet" element={<DrCompleteProfilePage />} />
        <Route path="/login/vet" element={<DrLoginPage />} />
        <Route path="/pets" element={<PetPage />} />
        <Route path="/add-pets" element={<AddPetsPage />} />
        <Route path='/dr' element={<DrProfilePage />} />
        <Route path='/book-appointment' element={<BookAppointmentPage />} />
        <Route path='/book-appointment-details' element={<BookAppointmentDetailPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/my-appointments' element={<AppointmentPage />} />
        <Route path='/home/vet' element={<DrHomePage />} />
        <Route path='/bookings/vet' element={<DrAppointmentPage />} />
        <Route path='/appointment-detail' element={<AppointmentDetailPage />} />
        <Route path='/reviews/vet' element={<DrReviewPage />} />
        <Route path='/scheduling' element={<DrScheduling />} />
        <Route path='/records' element={<UserUploadPage />} />
        <Route path='/results' element={<SearchResultPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
