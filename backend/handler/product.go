package handler

import (
	"ecommerce-gofiber/database"
	"ecommerce-gofiber/model"

	"github.com/gofiber/fiber/v2"
)

// Get All Products
func GetAllProducts(c *fiber.Ctx) error {
	db := database.DB
	var products []model.Product
	db.Find(&products)
	return c.JSON(fiber.Map{"status": "success", "message": "All products", "data": products})
}

// Get product with id
func GetProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DB
	var product model.Product
	db.Find(&product, id)
	if product.Title == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No product found with ID", "data": nil})
	}

	return c.JSON(fiber.Map{"status": "success","message": "Product found",	"data": product})
}

// membuat product baru
func CreateProduct(c *fiber.Ctx) error {
	db := database.DB
	product := new(model.Product)
	if err := c.BodyParser(product); err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Couldn't create product", "data": err})
	}

	db.Create(&product)

	return c.JSON(fiber.Map{"status": "success", "message": "Created product", "data": product})
}

// delete product 
func DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DB

	var product model.Product
	db.First(&product, id)

	if product.Title == "" {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "No product found with ID", "data": nil})
	}

	db.Delete(&product)
	return c.JSON(fiber.Map{"status": "success", "message": "Product successfully deleted", "data": nil})
}

