import express from "express";
import morgan from "morgan";
//애플리케이션 생성 (인스턴스 생성)
const app = express();
const PORT = 4000;
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit user");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);
//애플리케이션의 동작 설정 부분

//애플리케이션 켜기(동작하도록 요청에 응답할 수 있도록 대기시키기)
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
