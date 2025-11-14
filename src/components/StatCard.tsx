import GlassCard from "./GlassCard";

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <GlassCard className="text-center">
      {icon && (
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-4xl font-bold text-primary mb-2">{number}</h3>
      <p className="text-muted-foreground">{label}</p>
    </GlassCard>
  );
};

export default StatCard;
