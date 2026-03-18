<!-- app/Http/Requests/ProductRequest.php 
 | -- This request class is responsible for validating product creation and update requests.
 | -- It checks that the user is authorized (admin, manager, staff) and that the request data is valid.
 -->
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        $user = $this->user();
        return $user && $user->hasRole(['admin', 'manager','staff']); 
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {

        $productId = $this->route('id');

        $commonRules = [
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:100|unique:products,sku,' . $productId,
            'category_id' => 'required|exists:categories,id',
            'supplier_id' => 'required|exists:suppliers,id',
            'price' => 'required|numeric|min:0',
            'stock_quantity' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ];

        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            // For update, fields can be sometimes optional 
            foreach ($commonRules as $field => $rule) {
                $commonRules[$field] = 'sometimes|' . $rule;
            }
        }

        return $commonRules;
    }

    /* Custom error messages */
    public function messages(): array
    {
        return [
            'name.required' => 'Product name is required.',
            'name.string' => 'Product name must be a string.',
            'name.max' => 'Product name cannot exceed 255 characters.',
            'sku.required' => 'SKU is required.',
            'sku.string' => 'SKU must be a string.',
            'sku.max' => 'SKU cannot exceed 100 characters.',
            'sku.unique' => 'SKU must be unique.',
            'category_id.required' => 'Category is required.',
            'category_id.exists' => 'Selected category does not exist.',
            'supplier_id.required' => 'Supplier is required.',
            'supplier_id.exists' => 'Selected supplier does not exist.',
            'price.required' => 'Price is required.',
            'price.numeric' => 'Price must be a number.',
            'price.min' => 'Price must be at least 0.',
            'stock_quantity.required' => 'Stock quantity is required.',
            'stock_quantity.integer' => 'Stock quantity must be an integer.',
            'stock_quantity.min' => 'Stock quantity must be at least 0.',
            'description.string' => 'Description must be a string.',
        ];
    }

    /* Optional: Customize failed validation response */
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $response = response()->json([
            'message' => 'Validation Failed',
            'errors' => $validator->errors(),
        ], 422);

        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }
}

        