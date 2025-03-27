import { Router } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { uploadMiddleware } from "./middlewares/uploadMiddleware";

import { CreateUserController } from "../src/controllers/user/CreateUserController";
import { AuthUserController } from "../src/controllers/user/AuthUserController";
import { DetailUserController } from "../src/controllers/user/DetailUserController";
import { CreateCategoryController } from "../src/controllers/category/CreateCategoryController";
import { ListCategoriesController } from "../src/controllers/category/ListCategoriesController";
import { EditCategoryController } from "../src/controllers/category/EditCategoryController";
import { DeleteCategoryController } from "../src/controllers/category/DeleteCategoryController";
import { CreateProductController } from "../src/controllers/product/CreateProductController";
import { ListProductController } from "../src/controllers/product/ListProductController";
import { EditProductController } from "../src/controllers/product/EditProductController";
import { DeleteProductController } from "../src/controllers/product/DeleteProductController";
import { CreateOrderController } from "../src/controllers/order/CreateOrderController";
import { RemoveOrderController } from "../src/controllers/order/RemoveOrderController";
import { AddItemToOrderController } from "../src/controllers/order/AddItemToOrderController";
import { RemoveItemFromOrderController } from "../src/controllers/order/RemoveItemFromOrderController";
import { ChangeDraftOrderController } from "../src/controllers/order/ChangeOrderDraftController";
import { ChangeOrderStatusController } from "../src/controllers/order/ChangeOrderStatusController";
import { ReadOrderByStatusController } from "../src/controllers/order/ReadOrderByDraftController";
import { ReadItemsFromOrderController } from "../src/controllers/order/ReadItemsFromOrderController";

const router = Router();

// User Routes
router.post("/user", new CreateUserController().handle); // Register Route
router.post("/session", new AuthUserController().handle); // Login Route
router.get("/profile", isAuthenticated, new DetailUserController().handle); // Check Auth Route

// Category Routes
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/category", new ListCategoriesController().handle);
router.put("/category/:id", isAuthenticated, new EditCategoryController().handle);
router.delete("/category/:id", isAuthenticated, new DeleteCategoryController().handle);

// Product Routes
router.post("/product", isAuthenticated, uploadMiddleware, new CreateProductController().handle);
router.get("/product", new ListProductController().handle);
router.put("/product/:product_id", isAuthenticated, new EditProductController().handle);
router.delete("/product/:product_id", isAuthenticated, new DeleteProductController().handle);

// Order Routes
router.post("/order", new CreateOrderController().handle);
router.get("/order", isAuthenticated, new ReadOrderByStatusController().handle);
router.delete("/order/:order_id", new RemoveOrderController().handle);
router.patch("/order/draft/:order_id", new ChangeDraftOrderController().handle);
router.patch("/order/status/:order_id", new ChangeOrderStatusController().handle);

// Item Routes
router.get("/order/:order_id", new ReadItemsFromOrderController().handle);
router.post("/order/:order_id/item", new AddItemToOrderController().handle);
router.delete("/order/:order_id/:item_id", new RemoveItemFromOrderController().handle);

export { router }