import { Router, Request, Response } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { uploadMiddleware } from "./middlewares/uploadMiddleware";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemToOrderController } from "./controllers/order/AddItemToOrderController";
import { RemoveItemFromOrderController } from "./controllers/order/RemoveItemFromOrderController";
import { ChangeDraftOrderController } from "./controllers/order/ChangeOrderDraftController";
import { ChangeOrderStatusController } from "./controllers/order/ChangeOrderStatusController";
import { ReadOrderByStatusController } from "./controllers/order/ReadOrderByDraftController";
import { ReadItemsFromOrderController } from "./controllers/order/ReadItemsFromOrderController";

const router = Router();

// User Routes
router.post("/user", new CreateUserController().handle); // Register Route
router.post("/session", new AuthUserController().handle); // Login Route
router.get("/profile", isAuthenticated, new DetailUserController().handle); // Check Auth Route

// Category Routes
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/category", isAuthenticated, new ListCategoriesController().handle);
router.put("/category/:id", isAuthenticated, new EditCategoryController().handle);
router.delete("/category/:id", isAuthenticated, new DeleteCategoryController().handle);

// Product Routes
router.post("/product", isAuthenticated, uploadMiddleware, new CreateProductController().handle);
router.get("/product", isAuthenticated, new ListProductController().handle);
router.put("/product/:product_id", isAuthenticated, new EditProductController().handle);
router.delete("/product/:product_id", isAuthenticated, new DeleteProductController().handle);

// Order Routes
router.post("/order", new CreateOrderController().handle);
router.get("/order", isAuthenticated, new ReadOrderByStatusController().handle);
router.get("/", isAuthenticated, new ReadOrderByStatusController().handle);
router.delete("/order/:order_id", new RemoveOrderController().handle);
router.patch("/order/draft/:order_id", new ChangeDraftOrderController().handle);
router.patch("/order/status/:order_id", new ChangeOrderStatusController().handle);

// Item Routes
router.get("/order/:order_id", new ReadItemsFromOrderController().handle);
router.post("/order/:order_id/item", new AddItemToOrderController().handle);
router.delete("/order/:order_id/:item_id", new RemoveItemFromOrderController().handle);

export { router }