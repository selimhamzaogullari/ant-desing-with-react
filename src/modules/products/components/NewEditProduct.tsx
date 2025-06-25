import { Button, Form, Input, InputNumber, Select, Space, Typography, type FormProps } from "antd";
import { categories } from "../../../api/mockData";
import type { CreateProduct, Product } from "../types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { createProduct, updateProduct } from "../store/productSlice";
import { useEffect } from "react";

interface EditProductProps {
  type?: "new" | "edit";
  product?: Product | null;
}

const NewEditProduct = ({ type = "new", product = null }: EditProductProps) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
    }
  }, []);

  const onFinish: FormProps<Product>["onFinish"] = async (values) => {
    try {
      if (!product) await dispatch(createProduct(values)).unwrap();
      else await dispatch(updateProduct({ ...values, id: product.id })).unwrap();
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed: FormProps<Product>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ width: 500, padding: 20, borderRadius: 4, boxShadow: "0 1px 14px rgba(0,21,41,.1)", margin: "auto", background: "#fff" }}>
      <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 40 }}>
        {type === "edit" ? "Edit Product" : "Add Product"}
      </Typography.Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<Product> label="Product Name" name="name" rules={[{ required: true, message: "Please input product name!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<Product> label="Product Description" name="description" rules={[{ required: true, message: "Please input product description!" }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item<Product> label="Product Price" name="price" rules={[{ required: true, message: "Please input product price!" }]}>
          <InputNumber min={1} max={9999} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item<Product> label="Product Image Url" name="image" rules={[{ required: true, message: "Please input product image url!" }]}>
          <Input />
        </Form.Item>

        <Form.Item<Product> label="Product Category" name="category" rules={[{ required: true, message: "Please select product category!" }]}>
          <Select>
            {categories.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label={null}>
          <Space>
            <Button type="primary" disabled={loading} htmlType="submit">
              {type === "edit" ? "Edit" : "Create"}
            </Button>
            <Button disabled={loading} onClick={() => navigate("/products")}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewEditProduct;
