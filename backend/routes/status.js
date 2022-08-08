import express from 'express';
const router = express.Router();

import { checkStatus } from "../controllers/status.js";

router.post("/", checkStatus);

export default router;