// lib/logger.js
import morgan from "morgan";

// Use morgan to log HTTP requests
const logger = morgan("combined");

export default logger;
