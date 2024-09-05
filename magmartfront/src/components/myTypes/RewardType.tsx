type prize_types = "pokemon" | "other";

export type Reward = {
        tier_id:                number;
        name:                   string;
        description:            string;
        experience_required:    number;
        prize_type:             prize_types;
        prize:                  JSON;
};