import { Flex, Select, Input, Button } from "antd";
import { categories } from "../../../api/mockData";
import type { Product, ProductFilters } from "../types";
import { ClearOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { setFilters } from "../store/productSlice";

interface FilterProduct {
  onFilteredProduct: (filtredProduct: Product[] | []) => void;
}

const FilterProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useSelector((state: RootState) => state.products);
  const [filter, setFilter] = useState<ProductFilters>(filters);

  const changeCategory = (category: string) => {
    const newFilter = { ...filter, category };
    setFilter(newFilter);
    dispatch(setFilters(newFilter));
  };
  const searchProduct = (search: string) => {
    const newFilter = { ...filter, search };
    setFilter(newFilter);
    dispatch(setFilters(newFilter));
  };
  const clearFilter = () => {
    setFilter({});
    dispatch(setFilters({}));
  };
  return (
    <Flex gap="small" style={{ padding: "16px 0 16px 0" }}>
      <Input.Search placeholder="Search products..." allowClear value={filter.search} onSearch={searchProduct} style={{ width: 300 }} />
      <Select
        placeholder="Select a category"
        optionFilterProp="label"
        allowClear
        value={filter.category}
        onChange={changeCategory}
        style={{ minWidth: 150 }}
      >
        {categories.map((category) => (
          <Select.Option key={category} value={category}>
            {category}
          </Select.Option>
        ))}
      </Select>
      <Button onClick={clearFilter} icon={<ClearOutlined />}>
        Clear Filters
      </Button>
    </Flex>
  );
};

export default FilterProduct;
