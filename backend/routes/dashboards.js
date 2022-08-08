import express from 'express';
const router = express.Router();

import { deleteLight, getDashboardsInfo, saveLight, updateLight } from "../controllers/dashboards.js";

router.get("/", getDashboardsInfo);
router.post("/savelight", saveLight);
router.put("/updatelight/:id", updateLight);
router.delete("/deletelight/:id", deleteLight);

export default router;