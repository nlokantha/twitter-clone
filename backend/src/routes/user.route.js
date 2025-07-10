import expess from "express"
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = expess.Router()

router.get("/profile/:username",getUserProfile);

router.get("/sync",protectRoute,syncUser)
router.get("/me",protectRoute,getCurrentUser)
router.get("/profile",protectRoute,updateProfile)
router.get("/follow/:targetUserId",protectRoute,followUser)


export default router