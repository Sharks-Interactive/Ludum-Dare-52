using UnityEngine;

public class App : MonoBehaviour
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void Bootstrap()
    {
        GameObject app = Instantiate(Resources.Load<GameObject>("App"));
        DontDestroyOnLoad(app);
    }
}
