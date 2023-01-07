using UnityEngine;

/// <summary>
/// Purpose: Screenshake
/// </summary>
public class CameraShake : MonoBehaviour
{
	/// <summary>
	/// Transform of the camera to shake. Grabs the attached transform if null
	/// </summary>
	public Transform CamTransform;

	/// <summary>
	/// Amplitude of the shake. A larger value shakes the camera harder.
	/// </summary
	public float ShakeAmount = 0.7f;
	/// <summary>
	/// How fast Camera shake decays
	/// </summary>
	public float DecreaseFactor = 1.0f;

	private Vector3 _originalPos;
	private float _shakeTime = 0f;

	private void Awake() 
	{ 
		if (CamTransform == null) CamTransform = GetComponent<Transform>();

		Context.current.Shake = this;
	}

	private void OnEnable() { _originalPos = CamTransform.localPosition; }

	private void Update()
	{
		if (_shakeTime > 0)
		{
			CamTransform.localPosition = _originalPos + Random.insideUnitSphere * ShakeAmount;
			_shakeTime -= Time.deltaTime * DecreaseFactor;
		}
		else
		{
			_shakeTime = 0f;
			CamTransform.localPosition = _originalPos;
		}
	}

	public void Shake(float Duration = 0.2f, float Amplitude = 0.7f, float Decay = 1.0f)
	{
		_shakeTime = Duration;
		ShakeAmount = Amplitude;
		DecreaseFactor = Decay;
	}
}
