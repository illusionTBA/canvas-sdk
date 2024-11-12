export type CourseData = {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: null;
  grading_standard_id: number | null;
  is_public: boolean;
  created_at: Date;
  course_code: string;
  default_view: DefaultView;
  root_account_id: number;
  enrollment_term_id: number;
  license: License;
  grade_passback_setting: null;
  end_at: null;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  storage_quota_mb: number;
  is_public_to_auth_users: boolean;
  homeroom_course: boolean;
  course_color: null;
  friendly_name: null;
  apply_assignment_group_weights: boolean;
  calendar: Calendar;
  time_zone: TimeZone;
  blueprint: boolean;
  template: boolean;
  enrollments: Enrollment[];
  hide_final_grades: boolean;
  workflow_state: WorkflowState;
  restrict_enrollments_to_course_dates: boolean;
  locale?: string;
};

export type Calendar = {
  ics: string;
};

export enum DefaultView {
  Modules = "modules",
  Syllabus = "syllabus",
  Wiki = "wiki",
}

export type Enrollment = {
  type: Type;
  role: Role;
  role_id: number;
  user_id: number;
  enrollment_state: EnrollmentState;
  limit_privileges_to_course_section: boolean;
};

export enum EnrollmentState {
  Active = "active",
}

export enum Role {
  StudentEnrollment = "StudentEnrollment",
}

export enum Type {
  Student = "student",
}

export enum License {
  Private = "private",
}

export enum TimeZone {
  AmericaNewYork = "America/New_York",
}

export enum WorkflowState {
  Available = "available",
}
