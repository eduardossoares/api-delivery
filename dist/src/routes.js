"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const uploadMiddleware_1 = require("./middlewares/uploadMiddleware");
const CreateUserController_1 = require("../src/controllers/user/CreateUserController");
const AuthUserController_1 = require("../src/controllers/user/AuthUserController");
const DetailUserController_1 = require("../src/controllers/user/DetailUserController");
const CreateCategoryController_1 = require("../src/controllers/category/CreateCategoryController");
const ListCategoriesController_1 = require("../src/controllers/category/ListCategoriesController");
const EditCategoryController_1 = require("../src/controllers/category/EditCategoryController");
const DeleteCategoryController_1 = require("../src/controllers/category/DeleteCategoryController");
const CreateProductController_1 = require("../src/controllers/product/CreateProductController");
const ListProductController_1 = require("../src/controllers/product/ListProductController");
const EditProductController_1 = require("../src/controllers/product/EditProductController");
const DeleteProductController_1 = require("../src/controllers/product/DeleteProductController");
const CreateOrderController_1 = require("../src/controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("../src/controllers/order/RemoveOrderController");
const AddItemToOrderController_1 = require("../src/controllers/order/AddItemToOrderController");
const RemoveItemFromOrderController_1 = require("../src/controllers/order/RemoveItemFromOrderController");
const ChangeOrderDraftController_1 = require("../src/controllers/order/ChangeOrderDraftController");
const ChangeOrderStatusController_1 = require("../src/controllers/order/ChangeOrderStatusController");
const ReadOrderByDraftController_1 = require("../src/controllers/order/ReadOrderByDraftController");
const ReadItemsFromOrderController_1 = require("../src/controllers/order/ReadItemsFromOrderController");
const router = (0, express_1.Router)();
exports.router = router;
// User Routes
router.post("/user", new CreateUserController_1.CreateUserController().handle); // Register Route
router.post("/session", new AuthUserController_1.AuthUserController().handle); // Login Route
router.get("/profile", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle); // Check Auth Route
// Category Routes
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get("/category", new ListCategoriesController_1.ListCategoriesController().handle);
router.put("/category/:id", isAuthenticated_1.isAuthenticated, new EditCategoryController_1.EditCategoryController().handle);
router.delete("/category/:id", isAuthenticated_1.isAuthenticated, new DeleteCategoryController_1.DeleteCategoryController().handle);
// Product Routes
router.post("/product", isAuthenticated_1.isAuthenticated, uploadMiddleware_1.uploadMiddleware, new CreateProductController_1.CreateProductController().handle);
router.get("/product", new ListProductController_1.ListProductController().handle);
router.put("/product/:product_id", isAuthenticated_1.isAuthenticated, new EditProductController_1.EditProductController().handle);
router.delete("/product/:product_id", isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
// Order Routes
router.post("/order", new CreateOrderController_1.CreateOrderController().handle);
router.get("/order", isAuthenticated_1.isAuthenticated, new ReadOrderByDraftController_1.ReadOrderByStatusController().handle);
router.delete("/order/:order_id", new RemoveOrderController_1.RemoveOrderController().handle);
router.patch("/order/draft/:order_id", new ChangeOrderDraftController_1.ChangeDraftOrderController().handle);
router.patch("/order/status/:order_id", new ChangeOrderStatusController_1.ChangeOrderStatusController().handle);
// Item Routes
router.get("/order/:order_id", new ReadItemsFromOrderController_1.ReadItemsFromOrderController().handle);
router.post("/order/:order_id/item", new AddItemToOrderController_1.AddItemToOrderController().handle);
router.delete("/order/:order_id/:item_id", new RemoveItemFromOrderController_1.RemoveItemFromOrderController().handle);
