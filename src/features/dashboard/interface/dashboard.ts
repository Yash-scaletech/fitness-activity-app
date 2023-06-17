export interface IDataSet {
	steps: any[];
	calories: number[];
	waterTaken: number[];
	avgHeartRate: number[];
	maxHeartRate: number[];
	date: string[];
	popup: string;
}

export interface IData {
	user: IUser;
	activities: IActivity[];
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
}

export interface IActivity {
	id: string;
	name: string;
	date: string;
	duration: number;
	distance?: number;
	water_taken: number;
	calories_burned: number;
	heart_rate: IHeartRate;
	steps?: number;
	pace?: IPace;
	elevation_gain?: number;
	speed?: ISpeed;
	reps?: IReps;
	weight_lifted?: IWeightLifted;
	laps?: number;
	pool_length?: number;
	strides?: number;
	strokes?: number;
}

export interface IHeartRate {
	average: number;
	max: number;
}

export interface IPace {
	average: number;
	best: number;
}

export interface ISpeed {
	average: number;
	max: number;
}

export interface IReps {
	total: number;
	sets: number;
	average_per_set: number;
}

export interface IWeightLifted {
	total: number;
	average_per_rep: number;
}
