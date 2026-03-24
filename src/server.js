import "dotenv/config";
import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully");

    await sequelize.sync({ alter: true });
    console.log("✅ Database synchronized");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();