using UnityEngine;
using SharkUtils;

public class GuardFollowTargeter : MonoBehaviour, IAITargeter
{
    private GuardVision Vision;
    public int Priority => 5;

    public float DistanceToMaintain = 15;

    private void Awake()
    {
        Vision = GetComponent<GuardVision>();
    }

    public (bool, Vector3) GetTarget() =>
        (Vision.Target != null, Vision.Target != null ?
        ExtraFunctions.FindPosAlongCircleWithAngle(
            Vision.Target.transform.position,
            15,
            (180 / Mathf.PI) *
            Mathf.Atan2(
                Vision.transform.position.y - transform.position.y,
                Vision.Target.transform.position.x - transform.position.x
            )
        )
        :
        Vector3.zero);
}
