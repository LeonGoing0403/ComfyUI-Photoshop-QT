class SeedSender:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "sd": (
                    "INT",
                    {"default": 66666666, "min": 0, "max": 0xFFFFFFFFFFFFFFFF, "tooltip": "Uses the provided seed"},
                ),
            }
        }

    RETURN_TYPES = ("INT",)
    OUTPUT_TOOLTIPS = ("The seed",)
    FUNCTION = "send_seed"
    CATEGORY = "leon_ps_used"
    DESCRIPTION = "Uses the provided seed."

    def send_seed(self, sd):
        return (sd,)
