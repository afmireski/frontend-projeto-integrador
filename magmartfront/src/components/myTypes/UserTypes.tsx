export type UserData = {
    birth_date: string;
    id: string;
    name: string;
    phone: string;
    email: string;
    role: string;
    status: Status;
}

export type Status = {
    experience: number
    tier_id: number
    tiers: Tiers
    user_id: string
}

export type Tiers = {
    id: number
    limit_experience: number
    minimal_experience: number
    name: string
    previous_tier_id: number
}