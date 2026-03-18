<!-- app/Http/Requests/PurchaseRequest.php -->
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Only admin, manager, and staff can create purchases
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
        return [
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|integer|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.total_price' => 'required|numeric|min:0',
            'items.*.discount' => 'nullable|numeric|min:0',
        ];
    }

    /* Customize the validation messages */
    public function messages(): array
    {
        return [
            'items.required' => 'At least one item is required.',
            'items.array' => 'Items must be an array.',
            'items.min' => 'At least one item is required.',
            'items.*.product_id.required' => 'Product ID is required.',
            'items.*.product_id.integer' => 'Product ID must be an integer.',
            'items.*.product_id.exists' => 'Product ID does not exist.',
            'items.*.quantity.required' => 'Quantity is required.',
            'items.*.quantity.integer' => 'Quantity must be an integer.',
            'items.*.quantity.min' => 'Quantity must be at least 1.',
            'items.*.total_price.required' => 'Total price is required.',
            'items.*.total_price.numeric' => 'Total price must be a number.',
            'items.*.total_price.min' => 'Total price must be at least 0.',
            'items.*.discount.nullable' => 'Discount must be a valid number.',
            'items.*.discount.numeric' => 'Discount must be a number.',
            'items.*.discount.min' => 'Discount must be at least 0.',
        ];
    }

    /* Optional : Customize failed validation response for JSON APIs */
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        throw new \Illuminate\Http\Exceptions\HttpResponseException(
            response()->json([
                'message' => 'Validation failed.',
                'errors' => $validator->errors(),
            ], 422)
        );
    }
}

