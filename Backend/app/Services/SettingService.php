<!-- app/Services/SettingService.php 
| -- This service handles setting-related logic.
  -->
<?php
namespace App\Services;

use App\Models\Setting;
class SettingService extends BaseService
{
    /* Get a setting value by key */
    public function getSetting($key)
    {
        try {
            $setting = Setting::where('key', $key)->first();
            return $setting ? $setting->value : null;
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }

    /* Set a setting value by key */
    public function setSetting($key, $value)
    {
        try {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        } catch (\Throwable $e) {
            $this->handleException($e);
        }
    }
}

