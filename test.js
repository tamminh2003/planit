using System;

public class DriverExam
{
    public static void ExecuteExercise(IExercise exercise)
    {
        try {
          if(exercise.Start()) {
            exercise.Execute();
          }
        } catch (InvalidOperationException e) {
          exercise.MarkNegativePoints();
          throw new InvalidOperationException("Waiting to be implemented.");
        } finally {
          exercise.End();
        }
        
    }
}