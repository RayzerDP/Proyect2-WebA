import { Router } from "express";
import {getProjects} from "../controllers/projects.controller"
import {PostProjects} from "../controllers/projectsPost.controller"
import { GetProjectsId } from "../controllers/projectsGetId.controller";

const router = Router()

router.get('/projects', getProjects)
router.post('/project', PostProjects)
router.get('/projects/:id', GetProjectsId)

export default router