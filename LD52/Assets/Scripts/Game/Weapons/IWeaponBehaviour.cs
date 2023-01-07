using UnityEngine;

public interface IWeaponBehaviour
{
    public void ExecuteBehaviour(Vector3 Target);

    public void UpdateBehaviour(Vector3 Target);
}
