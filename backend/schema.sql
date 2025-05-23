PGDMP      0                }            code_ed    17.2    17.2 5    Z           0    0    ENCODING    ENCODING        SET client_encoding = 'BIG5';
                           false            [           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            \           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            ]           1262    16388    code_ed    DATABASE     �   CREATE DATABASE code_ed WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE code_ed;
                     postgres    false            ^           0    0    DATABASE code_ed    COMMENT     B   COMMENT ON DATABASE code_ed IS 'E learning programming platform';
                        postgres    false    4957                        2615    16390    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                     postgres    false            _           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                        postgres    false    5            `           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                        postgres    false    5            W           1247    16449    course_enum    TYPE     W   CREATE TYPE public.course_enum AS ENUM (
    'Python',
    'JavaScript',
    'Java'
);
    DROP TYPE public.course_enum;
       public               postgres    false    5            �            1259    16477    courses    TABLE     �   CREATE TABLE public.courses (
    course_id integer NOT NULL,
    title public.course_enum NOT NULL,
    instructor_id integer
);
    DROP TABLE public.courses;
       public         heap r       postgres    false    855    5            �            1259    16476    courses_course_id_seq    SEQUENCE     �   CREATE SEQUENCE public.courses_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.courses_course_id_seq;
       public               postgres    false    5    220            a           0    0    courses_course_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.courses_course_id_seq OWNED BY public.courses.course_id;
          public               postgres    false    219            �            1259    16491    enrollments    TABLE     �   CREATE TABLE public.enrollments (
    enrollment_id integer NOT NULL,
    student_id integer NOT NULL,
    course_id integer NOT NULL,
    enrollment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.enrollments;
       public         heap r       postgres    false    5            �            1259    16490    enrollment_enrollment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.enrollment_enrollment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.enrollment_enrollment_id_seq;
       public               postgres    false    5    222            b           0    0    enrollment_enrollment_id_seq    SEQUENCE OWNED BY     ^   ALTER SEQUENCE public.enrollment_enrollment_id_seq OWNED BY public.enrollments.enrollment_id;
          public               postgres    false    221            �            1259    16531    lessons    TABLE     �   CREATE TABLE public.lessons (
    lesson_id integer NOT NULL,
    course_id integer,
    title text NOT NULL,
    path text NOT NULL
);
    DROP TABLE public.lessons;
       public         heap r       postgres    false    5            �            1259    16530    lessons_lesson_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lessons_lesson_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.lessons_lesson_id_seq;
       public               postgres    false    226    5            c           0    0    lessons_lesson_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.lessons_lesson_id_seq OWNED BY public.lessons.lesson_id;
          public               postgres    false    225            �            1259    16511    progress    TABLE     F  CREATE TABLE public.progress (
    progress_id integer NOT NULL,
    student_id integer NOT NULL,
    course_id integer NOT NULL,
    progress_percentage numeric(5,2) DEFAULT 0.00,
    CONSTRAINT progress_progress_percentage_check CHECK (((progress_percentage >= (0)::numeric) AND (progress_percentage <= (100)::numeric)))
);
    DROP TABLE public.progress;
       public         heap r       postgres    false    5            �            1259    16510    progress_progress_id_seq    SEQUENCE     �   CREATE SEQUENCE public.progress_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.progress_progress_id_seq;
       public               postgres    false    224    5            d           0    0    progress_progress_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.progress_progress_id_seq OWNED BY public.progress.progress_id;
          public               postgres    false    223            �            1259    16465    students    TABLE     �   CREATE TABLE public.students (
    student_id integer NOT NULL,
    full_name text NOT NULL,
    email text NOT NULL,
    password_hash text NOT NULL,
    last_accessed timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    profile_picture text
);
    DROP TABLE public.students;
       public         heap r       postgres    false    5            �            1259    16464    students_student_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.students_student_id_seq;
       public               postgres    false    218    5            e           0    0    students_student_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.students_student_id_seq OWNED BY public.students.student_id;
          public               postgres    false    217            �           2604    16480    courses course_id    DEFAULT     v   ALTER TABLE ONLY public.courses ALTER COLUMN course_id SET DEFAULT nextval('public.courses_course_id_seq'::regclass);
 @   ALTER TABLE public.courses ALTER COLUMN course_id DROP DEFAULT;
       public               postgres    false    219    220    220            �           2604    16494    enrollments enrollment_id    DEFAULT     �   ALTER TABLE ONLY public.enrollments ALTER COLUMN enrollment_id SET DEFAULT nextval('public.enrollment_enrollment_id_seq'::regclass);
 H   ALTER TABLE public.enrollments ALTER COLUMN enrollment_id DROP DEFAULT;
       public               postgres    false    221    222    222            �           2604    16534    lessons lesson_id    DEFAULT     v   ALTER TABLE ONLY public.lessons ALTER COLUMN lesson_id SET DEFAULT nextval('public.lessons_lesson_id_seq'::regclass);
 @   ALTER TABLE public.lessons ALTER COLUMN lesson_id DROP DEFAULT;
       public               postgres    false    225    226    226            �           2604    16514    progress progress_id    DEFAULT     |   ALTER TABLE ONLY public.progress ALTER COLUMN progress_id SET DEFAULT nextval('public.progress_progress_id_seq'::regclass);
 C   ALTER TABLE public.progress ALTER COLUMN progress_id DROP DEFAULT;
       public               postgres    false    223    224    224            �           2604    16468    students student_id    DEFAULT     z   ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_student_id_seq'::regclass);
 B   ALTER TABLE public.students ALTER COLUMN student_id DROP DEFAULT;
       public               postgres    false    218    217    218            Q          0    16477    courses 
   TABLE DATA           B   COPY public.courses (course_id, title, instructor_id) FROM stdin;
    public               postgres    false    220   �>       S          0    16491    enrollments 
   TABLE DATA           \   COPY public.enrollments (enrollment_id, student_id, course_id, enrollment_date) FROM stdin;
    public               postgres    false    222   �>       W          0    16531    lessons 
   TABLE DATA           D   COPY public.lessons (lesson_id, course_id, title, path) FROM stdin;
    public               postgres    false    226   �>       U          0    16511    progress 
   TABLE DATA           [   COPY public.progress (progress_id, student_id, course_id, progress_percentage) FROM stdin;
    public               postgres    false    224   ?       O          0    16465    students 
   TABLE DATA           o   COPY public.students (student_id, full_name, email, password_hash, last_accessed, profile_picture) FROM stdin;
    public               postgres    false    218   9?       f           0    0    courses_course_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.courses_course_id_seq', 2, true);
          public               postgres    false    219            g           0    0    enrollment_enrollment_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.enrollment_enrollment_id_seq', 52, true);
          public               postgres    false    221            h           0    0    lessons_lesson_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.lessons_lesson_id_seq', 1, false);
          public               postgres    false    225            i           0    0    progress_progress_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.progress_progress_id_seq', 39, true);
          public               postgres    false    223            j           0    0    students_student_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.students_student_id_seq', 20, true);
          public               postgres    false    217            �           2606    16484    courses courses_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public                 postgres    false    220            �           2606    16497    enrollments enrollment_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollment_pkey PRIMARY KEY (enrollment_id);
 E   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollment_pkey;
       public                 postgres    false    222            �           2606    16499 /   enrollments enrollment_student_id_course_id_key 
   CONSTRAINT     {   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollment_student_id_course_id_key UNIQUE (student_id, course_id);
 Y   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollment_student_id_course_id_key;
       public                 postgres    false    222    222            �           2606    16538    lessons lessons_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (lesson_id);
 >   ALTER TABLE ONLY public.lessons DROP CONSTRAINT lessons_pkey;
       public                 postgres    false    226            �           2606    16519    progress progress_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.progress
    ADD CONSTRAINT progress_pkey PRIMARY KEY (progress_id);
 @   ALTER TABLE ONLY public.progress DROP CONSTRAINT progress_pkey;
       public                 postgres    false    224            �           2606    16475    students students_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.students DROP CONSTRAINT students_email_key;
       public                 postgres    false    218            �           2606    16473    students students_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public                 postgres    false    218            �           2606    16554    enrollments unique_enrollment 
   CONSTRAINT     i   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT unique_enrollment UNIQUE (student_id, course_id);
 G   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT unique_enrollment;
       public                 postgres    false    222    222            �           2606    16556    progress unique_progress 
   CONSTRAINT     d   ALTER TABLE ONLY public.progress
    ADD CONSTRAINT unique_progress UNIQUE (student_id, course_id);
 B   ALTER TABLE ONLY public.progress DROP CONSTRAINT unique_progress;
       public                 postgres    false    224    224            �           2606    16505 %   enrollments enrollment_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollment_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id);
 O   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollment_course_id_fkey;
       public               postgres    false    220    4779    222            �           2606    16500 &   enrollments enrollment_student_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollment_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);
 P   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollment_student_id_fkey;
       public               postgres    false    222    4777    218            �           2606    16539    lessons lessons_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.lessons DROP CONSTRAINT lessons_course_id_fkey;
       public               postgres    false    220    4779    226            �           2606    16525     progress progress_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.progress
    ADD CONSTRAINT progress_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id);
 J   ALTER TABLE ONLY public.progress DROP CONSTRAINT progress_course_id_fkey;
       public               postgres    false    4779    220    224            �           2606    16520 !   progress progress_student_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.progress
    ADD CONSTRAINT progress_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(student_id);
 K   ALTER TABLE ONLY public.progress DROP CONSTRAINT progress_student_id_fkey;
       public               postgres    false    218    4777    224            Q   +   x�3��,������2��J,KN.�,(��|+F��� 9�      S      x������ � �      W      x������ � �      U      x������ � �      O   e   x��;� �V����#Re!6�!�F�&���8 ��_��=r��ʽ7"��
҂0A��8��+��F��y�y1��;h�G����bN�32�$��4hp     