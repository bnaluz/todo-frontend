'use client';
import { CiCirclePlus } from 'react-icons/ci';

interface CreateTaskButtonProps {
  onClick?: () => void;
}

const CreateTaskButton: React.FC<CreateTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex
        flex-row
        items-center
        justify-center
        gap-2
        absolute
        w-[736px]
        h-[52px]
        left-1/2
        top-[173px]
        -translate-x-1/2
        bg-[#1E6F9F]
        hover:bg-[#2591cf]
        text-[#F2F2F2]
        text-lg
        font-semibold
        rounded-lg
        shadow-md
        transition
        duration-300
        z-10
      "
    >
      <span>Create Task</span>
      <CiCirclePlus className="w-6 h-6 text-[#F2F2F2]" />
    </button>
  );
};

export default CreateTaskButton;
