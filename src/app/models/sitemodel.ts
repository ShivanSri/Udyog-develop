import { NumericRule } from "devextreme/ui/validation_engine";

export namespace SiteModel {

    export class UserLogin {
        username: number;
        password: string;

        constructor(object: {
            username?: number;
            password?: string;
        } = {}) {
            this.username = object.username;
            this.password = object.password;
        }
    }

    export class UserDetails {
        refresh: string;
        access: string;
        username: string;
        id: number;
        mobile_no: number;
        email: string;
        user_type: string;
        last_login: string;

        constructor(object: {
            refresh?: string;
            access?: string;
            username?: string;
            id?: number;
            mobile_no?: number;
            email?: string;
            user_type?: string;
            last_login?: string;
        } = {}) {
            this.refresh = object.refresh;
            this.access = object.access;
            this.username = object.username;
            this.id = object.id;
            this.mobile_no = object.mobile_no;
            this.email = object.email;
            this.user_type = object.user_type;
            this.last_login = object.last_login;
        }
    }

    export class CreateUser {
        id: number;
        first_name: string;
        last_name: string;
        mobile_no: string;
        dob: string;
        email: string;
        username: string;
        password: string;
        user_type: string;
        company_name: string;
        company_code: string;
        company_desc: string;
        location: string;

        constructor(object: {
            id?: number;
            first_name?: string;
            last_name?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
            username?: string;
            password?: string;
            user_type?: string;
            company_name?: string;
            company_code?: string;
            company_desc?: string;
            location?: string;
        } = {}) {
            this.id = object.id;
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
            this.username = object.username;
            this.password = object.password;
            this.user_type = object.user_type;
            this.company_name = object.company_name;
            this.company_code = object.company_code;
            this.company_desc = object.company_desc;
            this.location = object.location;
        }
    }

    export class UpdateUser {
        id: number;
        first_name: string;
        last_name: string;
        mobile_no: string;
        dob: string;
        email: string;

        constructor(object: {
            id?: number;
            first_name?: string;
            last_name?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
        } = {}) {
            this.id = object.id;
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
        }
    }

    export class UpdateCurrentUser {
        first_name: string;
        last_name: string;
        mobile_no: string;
        dob: string;
        email: string;
        permissions_mode: string;
        roles: number[];

        constructor(object: {
            first_name?: string;
            last_name?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
            permissions_mode?: string;
            roles?: number[];

        } = {}) {
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
            this.permissions_mode = object.permissions_mode;
            this.roles = object.roles;
        }
    }

    export class updateUserByEmployer {
        first_name: string;
        last_name: string;
        username: string;
        mobile_no: string;
        dob: string;
        email: string;
        userType: string;

        constructor(object: {
            first_name?: string;
            last_name?: string;
            username?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
            userType?: string;


        } = {}) {
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.username = object.username;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
            this.userType = object.userType;
        }
    }

    export class User {
        id: number;
        last_login: string;
        is_superuser: boolean;
        first_name: string;
        last_name: string;
        mobile_no: string;
        dob: string;
        email: string;
        username: string;
        password: string;
        user_type: string;
        company_name: string;
        company_code: string;
        company_desc: string;
        location: string;
        is_active: boolean;
        is_staff: boolean;
        created_at: Date;
        updated_at: Date;
        created_by: number;
        updated_by: number;
        roles: number[];

        constructor(object: {
            id?: number;
            last_login?: string;
            is_superuser?: boolean;
            first_name?: string;
            last_name?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
            username?: string;
            password?: string;
            user_type?: string;
            company_name?: string;
            company_code?: string;
            company_desc?: string;
            location?: string;
            is_active?: boolean;
            is_staff?: boolean;
            created_at?: Date;
            updated_at?: Date;
            created_by?: number;
            updated_by?: number;
            roles?: number[];
        } = {}) {
            this.id = object.id;
            this.is_superuser = object.is_superuser;
            this.last_login = object.last_login;
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
            this.username = object.username;
            this.password = object.password;
            this.user_type = object.user_type;
            this.company_name = object.company_name;
            this.company_code = object.company_code;
            this.company_desc = object.company_desc;
            this.location = object.location;
            this.is_active = object.is_active;
            this.is_staff = object.is_staff;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.roles = object.roles;
        }
    }

    export class CreateProfile {
        mobile_no: string;
        dob: string;
        gender: string;
        total_experience: string;
        skills: SiteModel.Skills[];
        expected_salary: string;
        address: string;
        pincode: string;
        profile_type: string;
        profile_image: string;
        profile_status: string;
        created_at: Date;
        updated_at: Date;
        user: number;
        current_location: number;
        created_by: number;
        updated_by: number;
        preferred_location: number;

        constructor(object: {
            mobile_no?: string;
            dob?: string;
            gender?: string;
            total_experience?: string;
            skills?: SiteModel.Skills[];
            expected_salary?: string;
            address?: string;
            pincode?: string;
            profile_type?: string;
            profile_image?: string;
            profile_status?: string;
            created_at?: Date;
            updated_at?: Date;
            user?: number;
            current_location?: number;
            created_by?: number;
            updated_by?: number;
            preferred_location?: number;
        } = {}) {
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.gender = object.gender;
            this.dob = object.dob;
            this.total_experience = object.total_experience;
            this.skills = object.skills;
            this.expected_salary = object.expected_salary;
            this.address = object.address;
            this.pincode = object.pincode;
            this.profile_type = object.profile_type;
            this.profile_image = object.profile_image;
            this.profile_status = object.profile_status;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.user = object.user;
            this.current_location = object.current_location;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.preferred_location = object.preferred_location
        }
    }

    export class CreateJobseeker {
        first_name: string;
        last_name: string;
        mobile_no: string;
        dob: string;
        email: string;
        username: string;
        password: string;
        user_type: string;

        constructor(object: {
            first_name?: string;
            last_name?: string;
            mobile_no?: string;
            dob?: string;
            email?: string;
            username?: string;
            password?: string;
            user_type?: string;
        } = {}) {
            this.first_name = object.first_name;
            this.last_name = object.last_name;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.email = object.email;
            this.username = object.username;
            this.password = object.password;
            this.user_type = object.user_type;
        }
    }

    export class ResetPassword {
        email: string;

        constructor(object: {
            email?: string;
        } = {}) {
            this.email = object.email;
        }
    }

    export class ResetPasswordConfirm {
        email: string;
        password: string;
        token: string;

        constructor(object: {
            email?: string;
            password?: string;
            token?: string;
        } = {}) {
            this.email = object.email;
            this.password = object.password;
            this.token = object.token;
        }
    }


    export class Role {
        id: number;
        role_name: string;
        role_desc: string;
        permissions: SiteModel.Permission[];
        company_code: string;
        name: string;

        constructor(object: {
            id?: number;
            role_name?: string;
            role_desc?: string;
            permissions?: SiteModel.Permission[];
            company_code?: string;
            name?: string;

        } = {}) {
            this.id = object.id;
            this.role_name = object.role_name;
            this.role_desc = object.role_desc;
            this.permissions = object.permissions || [];
            this.company_code = object.company_code;
            this.name = object.name;
        }
    }

    export class Permission {
        permission_name: string;
        permission_desc: string;
        url_name: string;
        method: string;

        constructor(object: any) {
            this.permission_name = object.permission_name;
            this.permission_desc = object.permission_desc;
            this.url_name = object.url_name;
            this.method = object.method;
        }
    }

    export class ChangePassword {
        old_password: string;
        new_password: string;

        constructor(object: {
            old_password?: string;
            new_password?: string;
        } = {}) {
            this.old_password = object.old_password;
            this.new_password = object.new_password;
        }
    }

    export class ChangePasswordByAdmin {
        password: string;
        password1: string;
        user_id: number;

        constructor(object: {
            password?: string;
            password1?: string;
            user_id?: number;
        } = {}) {
            this.password = object.password;
            this.password1 = object.password1;
            this.user_id = object.user_id;
        }
    }
    export class Country {
        id: number;
        name: string;
        iso_code: number;
        mobile_code: number;
        created_at: Date;
        updated_at: Date;
        created_by: string;
        updated_by: string;

        constructor(object: any) {
            this.id = object.id;
            this.name = object.name;
            this.iso_code = object.iso_code;
            this.mobile_code = object.mobile_code;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class State {
        id: number;
        name: string;
        code: number;
        created_at: Date;
        updated_at: Date;
        country: number;
        created_by: string;
        updated_by: string;

        constructor(object: any) {
            this.id = object.id;
            this.name = object.name;
            this.code = object.code;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.country = object.country;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class City {
        id: number;
        name: string;
        code: number;
        created_at: Date;
        updated_at: Date;
        state: number;
        country: number;
        created_by: string;
        updated_by: string;

        constructor(object: any) {
            this.id = object.id;
            this.name = object.name;
            this.code = object.code;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.state = object.state;
            this.country = object.country;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class Curriencies {
        id: number;
        currency_name: string;
        created_at: Date;
        updated_at: Date;        
        created_by: string;
        updated_by: string;

        constructor(object: {
            id?: number;
            currency_name?: string;
            created_at?: Date;
            updated_at?: Date;        
            created_by?: string;
            updated_by?: string;
        } = {}) {
            this.id = object.id;
            this.currency_name = object.currency_name;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class Companies {
        id: number;
        company_name: string;
        company_code: string;
        company_image: string;
        company_desc: string;
        location: string;
        website: string;
        created_at: Date;
        updated_at: Date;
        owner: number;
        created_by: string;
        updated_by: string;
        employers: EmployerProfile; 

        constructor(object: {
            id?: number;
            company_name?: string;
            company_code?: string;
            company_image?: string;
            company_desc?: string;
            location?: string;
            website?: string;
            created_at?: Date;
            updated_at?: Date;
            owner?: number;
            created_by?: string;
            updated_by?: string;
            employers?: EmployerProfile;
        } = {}) {
            this.id = object.id;
            this.company_name = object.company_name;
            this.company_code = object.company_code;
            this.company_image = object.company_image;
            this.company_desc = object.company_desc;
            this.location = object.location;
            this.website = object.website;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.owner = object.owner;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.employers = object.employers;
        }
    }

    export class Languages {
        id: number;
        language_name: string;

        constructor(object: {
            id?: number;
            language_name?: string;
        } = {}) {
            this.id = object.id;
            this.language_name = object.language_name;
        }
    }

    export class Qualifications {
        qualification_name: string;

        constructor(object: any) {
            this.qualification_name = object.qualification_name;
        }
    }

    export class Skills {
        skills_name: string;

        constructor(object: any) {
            this.skills_name = object.skills_name;
        }
    }

    export class University {
        university_name: string;

        constructor(object: any) {
            this.university_name = object.university_name;
        }
    }

    export class JobApplicationStatus {
        id: number;
        status_name: string;
        is_active: boolean;
        is_initial: boolean;
        company: number;
        created_at: Date;
        updated_at: Date;
        created_by: number;
        updated_by: number;

        constructor(object: {
            id?: number;
            status_name?: string;
            is_active?: boolean;
            is_initial?: boolean;
            company?: number;
            created_at?: Date;
            updated_at?: Date;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.status_name = object.status_name;
            this.is_active = object.is_active;
            this.is_initial = object.is_initial;
            this.company = object.company;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class JobApplicationStatusDetails {
        id: number;
        is_active: boolean;
        status_name: string;
        created_at: Date;
        updated_at: Date;
        created_by: number;
        updated_by: number;

        constructor(object: {
            id?: number;
            is_active?: boolean;
            status_name?: string;
            created_at?: Date;
            updated_at?: Date;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.is_active = object.is_active;
            this.status_name = object.status_name;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class JobApplication {
        id: number;
        resume: number;
        application_no: string;
        upload_resume: string;
        applied_on: Date;
        user: number;
        job: number;
        application_status: number;
        created_at: Date;
        updated_at: Date;
        created_by: number;
        updated_by: number;
        user_details: User;
        job_details: Jobs;
        application_status_details: JobApplicationStatusDetails;
        
        constructor(object: {
            id?: number;
            resume?: number;
            application_no?: string;
            upload_resume?: string;
            applied_on?: Date;
            user?: number;
            job?: number;
            application_status?: number;
            created_at?: Date;
            updated_at?: Date;
            created_by?: number;
            updated_by?: number;
            user_details?: User;
            job_details?: Jobs;
            application_status_details?: JobApplicationStatusDetails;

        } = {}) {
            this.id = object.id;
            this.resume = object.resume;
            this.application_no = object.application_no;
            this.upload_resume = object.upload_resume;
            this.applied_on = object.applied_on;
            this.user = object.user;
            this.job = object.job;
            this.application_status = object.application_status;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.user_details = object.user_details;
            this.job_details = object.job_details;
            this.application_status_details = object.application_status_details;
        }
    }

    export class Application {
        job: number;
        resume: number;

        constructor(object: {
            job?: number;
            resume?: number;
        } = {}) {
            this.job = object.job;
            this.resume = object.resume;
        }
    }

    export class ApplicationDetails {
        id: number;
        application_no: string;
        resume: string;
        applied_on: Date;
        created_at: Date;
        updated_at: Date;
        user: number;
        job: number;
        userDetails: SiteModel.UserDetails;
        jobs: SiteModel.Jobs;

        constructor(object: {
            id?: number;
            application_no?: string;
            resume?: string;
            applied_on?: Date;
            created_at?: Date;
            updated_at?: Date;
            user?: number;
            job?: number;
            userDetails?: SiteModel.UserDetails;
            jobs?: SiteModel.Jobs;
        } = {}) {
            this.id = object.id;
            this.application_no = object.application_no;
            this.resume = object.resume;
            this.applied_on = object.applied_on;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.user = object.user;
            this.job = object.job;
            this.userDetails = object.userDetails;
            this.jobs = object.jobs;
        }
    }



    export class Experience {
        id: number;
        company_name: string;
        designation: string;
        start_date: Date;
        end_date: Date;
        present_company: boolean;
        roles_and_responsibilites: string;
        created_at: Date;
        updated_at: Date;
        profile: number;
        created_by: number;
        updated_by: number;


        constructor(object: {
            id?: number;
            company_name?: string;
            designation?: string;
            start_date?: Date;
            end_date?: Date;
            present_company?: boolean;
            roles_and_responsibilites?: string;
            created_at?: Date;
            updated_at?: Date;
            profile?: number;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.company_name = object.company_name;
            this.designation = object.designation;
            this.start_date = object.start_date;
            this.end_date = object.end_date;
            this.present_company = object.present_company;
            this.roles_and_responsibilites = object.roles_and_responsibilites;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.profile = object.profile;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }
    export class Education {
        id: number;
        highest_qualification: boolean;
        course_name: string;
        course_specialization: string;
        university_name: string;
        passed_out_year: string;
        percentage: number;
        created_at: Date;
        updated_at: Date;
        profile: number;
        created_by: number;
        updated_by: number;

        constructor(object: {
            id?: number;
            highest_qualification?: boolean;
            course_name?: string;
            course_specialization?: string;
            university_name?: string;
            passed_out_year?: string;
            percentage?: number;
            created_at?: Date;
            updated_at?: Date;
            profile?: number;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.highest_qualification = object.highest_qualification;
            this.course_name = object.course_name;
            this.course_specialization = object.course_specialization;
            this.university_name = object.university_name;
            this.passed_out_year = object.passed_out_year;
            this.percentage = object.percentage;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.profile = object.profile;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class CertificatioandRewards {
        id: number;
        certification_name: string;
        certification_provider: string;
        validity: string;
        awards: string;
        created_at: Date;
        updated_at: Date;
        profile: number;
        created_by: number;
        updated_by: number;

        constructor(object: {
            id?: number;
            certification_name?: string;
            certification_provider?: string;
            validity?: string;
            awards?: string;
            created_at?: Date;
            updated_at?: Date;
            profile?: number;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.certification_name = object.certification_name;
            this.certification_provider = object.certification_provider;
            this.validity = object.validity;
            this.awards = object.awards;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.profile = object.profile;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class Knownlanguage {
        id: number;
        language_name: string;
        read: boolean;
        write: boolean;
        speak: boolean;
        created_at: Date;
        updated_at: Date;
        profile: number;
        created_by: number;
        updated_by: number;

        constructor(object: {
            id?: number;
            language_name?: string;
            read?: boolean;
            write?: boolean;
            speak?: boolean;
            created_at?: Date;
            updated_at?: Date;
            profile?: number;
            created_by?: number;
            updated_by?: number;
        } = {}) {
            this.id = object.id;
            this.language_name = object.language_name;
            this.read = object.read;
            this.write = object.write;
            this.speak = object.speak;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.profile = object.profile;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class Profile {
        id: number;
        mobile_no: number;
        dob: string;
        gender: string;
        total_experience: string;
        skills: Array<string>;
        expected_salary: string;
        es_currency: number;
        current_salary: string;
        cs_currency: number;
        address: string;
        pincode: number;
        profile_type: string;
        profile_image: string;
        profile_image_url: string;
        profile_status: string;
        created_at: Date;
        updated_at: Date
        user: number;
        current_location: number;
        created_by: number;
        updated_by: number;
        preferred_location: Array<number>;
        experience: Array<Experience>
        education: Array<Education>;
        certifications_and_awards: Array<CertificatioandRewards>;
        known_language: Array<Knownlanguage>;
        profile_docs: Array<ProfileDocs>;

        constructor(object: {
            id?: number;
            mobile_no?: number;
            dob?: string;
            gender?: string;
            total_experience?: string;
            skills?: Array<string>;
            expected_salary?: string;
            es_currency?: number;
            current_salary?: string;
            cs_currency?: number;
            address?: string;
            pincode?: number;
            profile_type?: string;
            profile_image?: string;
            profile_image_url?: string;
            profile_status?: string;
            created_at?: Date;
            updated_at?: Date;
            user?: number;
            current_location?: number;
            created_by?: number;
            updated_by?: number;
            preferred_location?: Array<number>;
            experience?: Array<Experience>
            education?: Array<Education>;
            certifications_and_awards?: Array<CertificatioandRewards>;
            known_language?: Array<Knownlanguage>;
            profile_docs?: Array<ProfileDocs>;
        } = {}) {
            this.id = object.id;
            this.mobile_no = object.mobile_no;
            this.dob = object.dob;
            this.gender = object.gender;
            this.total_experience = object.total_experience;
            this.skills = object.skills;
            this.expected_salary = object.expected_salary;
            this.es_currency = object.es_currency;
            this.current_salary = object.current_salary;
            this.cs_currency = object.cs_currency;
            this.address = object.address;
            this.pincode = object.pincode;
            this.profile_type = object.profile_type;
            this.profile_image = object.profile_image;
            this.profile_image_url = object.profile_image_url;
            this.profile_status = object.profile_status;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.user = object.user;
            this.current_location = object.current_location;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.preferred_location = object.preferred_location;
            this.experience = object.experience;
            this.education = object.education;
            this.certifications_and_awards = object.certifications_and_awards;
            this.known_language = object.known_language;
            this.profile_docs = object.profile_docs;
        }
    }

    export class EmployerProfile {
        id: number;
        mobile_no: number;
        address: string;
        pincode: number;
        designation: string;
        profile_image: string;
        created_at: Date;
        updated_at: Date
        user: number;
        created_by: number;
        updated_by: number;
        company_details: Companies;
        employers: Array<User>;

        constructor(object: {
            id?: number;
            mobile_no?: number;
            address?: string;
            pincode?: number;
            designation?: string;
            profile_image?: string;
            created_at?: Date;
            updated_at?: Date;
            user?: number;
            created_by?: number;
            updated_by?: number;
            company_details?: Companies;
            employers?: Array<User>;
        } = {}) {
            this.id = object.id;
            this.mobile_no = object.mobile_no;
            this.address = object.address;
            this.pincode = object.pincode;
            this.designation = object.designation;
            this.profile_image = object.profile_image;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.user = object.user;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.company_details = object.company_details;
            this.employers = object.employers;
        }
    }

    export class ProfileDocs {
        id: number;
        document_type: string;
        document_location: string;
        document_location_url: string;
        fileName: string;
        profile: number;
        created_by: number;
        updated_by: number;
        created_at: Date;
        updated_at: Date
        constructor(object: {
            id?: number;
            document_type?: string;
            document_location?: string;
            document_location_url?: string;
            fileName?: string;
            profile?: number;
            created_by?: number;
            updated_by?: number;
            created_at?: Date;
            updated_at?: Date
        } = {}) {
            this.id = object.id;
            this.document_type = object.document_type;
            this.document_location = object.document_location;
            this.document_location_url = object.document_location_url;
            this.fileName = object.fileName;
            this.profile = object.profile;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
        }
    }

    export class Jobs {
        id: number;
        job_name: string;
        job_code: string;
        job_desc: string;
        job_type: string;
        position: string;
        salary: string;
        currency: number;
        experience: string;
        location: string;
        last_date: Date;
        job_status: string;
        created_at: Date;
        updated_at: Date;
        is_active: boolean
        user: number;
        company: SiteModel.Companies;
        created_by: number;
        updated_by: number;
        website: string;
        readMore: boolean;

        constructor(object: {
            id?: number;
            job_name?: string;
            job_code?: string;
            job_desc?: string;
            job_type?: string;
            position?: string;
            salary?: string;
            currency?: number;
            experience?: string;
            location?: string;
            last_date?: Date;
            job_status?: string;
            created_at?: Date;
            updated_at?: Date;
            is_active?: boolean
            user?: number;
            company?: SiteModel.Companies;
            created_by?: number;
            updated_by?: number;
            website?: string;
            readMore?: boolean;

        } = {}) {
            this.id = object.id;
            this.job_name = object.job_name;
            this.job_code = object.job_code;
            this.job_desc = object.job_desc;
            this.job_type = object.job_type;
            this.position = object.position;
            this.salary = object.salary;
            this.currency = object.currency;
            this.experience = object.experience;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.last_date = object.last_date;
            this.job_status = object.job_status;
            this.is_active = object.is_active;
            this.user = object.user;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.company = object.company;
            this.website = object.website;
            this.readMore = object.readMore;
        }
    }

    export class Documents {
        document_type_value: string;
        document_type: string;
        alias_name: string;
        constructor(object: {
            document_type_value?: string;
            document_type?: string;
            alias_name?: string;
        } = {}) {
            this.document_type_value = object.document_type_value;
            this.document_type = object.document_type;
            this.alias_name = object.alias_name;
        }
    }
    export class SearchJob {
        count: number;
        next: string;
        previous: string;
        results: Array<SiteModel.JobSearch>; 
        constructor(object: {
            count?: number;
            next?: string;
            previous?: string;
            results?: Array<SiteModel.JobSearch>; 
        } = {}) {
            this.count = object.count;
            this.next = object.next;
            this.previous = object.previous;
            this.results = object.results || [];
        }
    }

    export class JobSearch {
        id: number;
        job_name: string;
        job_code: string;
        job_desc: string;
        job_type: string;
        position: string;
        salary: string;
        experience: string;
        location: string;
        last_date: Date;
        job_status: string;
        created_at: Date;
        updated_at: Date;
        is_active: boolean
        created_by: number;
        updated_by: number;
        user: User;
        company: Companies;
        applied: boolean;
        readMore: boolean;
        constructor(object: {
            id?: number;
            job_name?: string;
            job_code?: string;
            job_desc?: string;
            job_type?: string;
            position?: string;
            salary?: string;
            experience?: string;
            location?: string;
            last_date?: Date;
            job_status?: string;
            created_at?: Date;
            updated_at?: Date;
            is_active?: boolean;
            created_by?: number;
            updated_by?: number;
            user?: User;
            company?: Companies;
            applied?: boolean;
            readMore?: boolean;

        } = {}) {
            this.id = object.id;
            this.job_name = object.job_name;
            this.job_code = object.job_code;
            this.job_desc = object.job_desc;
            this.job_type = object.job_type;
            this.position = object.position;
            this.salary = object.salary;
            this.experience = object.experience;
            this.location = object.location;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
            this.last_date = object.last_date;
            this.job_status = object.job_status;
            this.is_active = object.is_active;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.user = object.user;
            this.company = object.company;
            this.applied = object.applied || false;
            this.readMore = object.readMore || false;
        }
    }

    export class DashboardDetails {
        total_no_of_jobs: number;
        total_no_of_job_application: number;
        total_no_of_companies: number;
        total_no_of_application_viewed: number;
        total_no_of_application_archived: number;
        total_no_of_application_created: number;

        constructor(object: {
            total_no_of_jobs?: number;
            total_no_of_job_application?: number;
            total_no_of_companies?: number;
            total_no_of_application_viewed?: number;
            total_no_of_application_archived?: number;
            total_no_of_application_created?: number;
            
        } = {}) {
            this.total_no_of_jobs = object.total_no_of_jobs;
            this.total_no_of_job_application = object.total_no_of_job_application;
            this.total_no_of_companies = object.total_no_of_companies;
            this.total_no_of_application_viewed = object.total_no_of_application_viewed;
            this.total_no_of_application_archived = object.total_no_of_application_archived;
            this.total_no_of_application_created = object.total_no_of_application_created;
        }
    }

    export class Currency {
        id: number;
        currency_name: string;
        created_at: Date;
        updated_at: Date;
        created_by: number;
        updated_by: number;

        constructor(object: any) {
            this.id = object.id;
            this.currency_name = object.currency_name;
            this.created_at = object.created_at;
            this.updated_at = object.updated_at;
            this.created_by = object.created_by;
            this.updated_by = object.updated_by;
        }
    }

    export class UserAvailability {
        username: string;
        constructor(object: {
            username?: string;

        } = {}) {
            this.username = object.username;
        }
    }

    export class ListSchema {
        name: string;
        cards: Jobs[];
        constructor(object: {
            name?: string;
            cards?: Jobs[];

        } = {}) {
            this.name = object.name;
            this.cards = object.cards || [];
        }
    }

    
    export enum MessageSeverity {
        Default,
        Success,
        Info,
        Warn,
        Danger
    }
    export enum ResponseCode {
        Unauthorized = 401,
        BadRequest = 400
    }
}